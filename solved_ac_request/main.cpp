#include <iostream>
#include <string>
#include <Windows.h>
#include <winhttp.h>
#pragma comment(lib, "winhttp.lib")

std::wstring s2ws(const std::string& s)
{
    int len;
    int slength = (int)s.length() + 1;
    len = MultiByteToWideChar(CP_ACP, 0, s.c_str(), slength, 0, 0);
    wchar_t* buf = new wchar_t[len];
    MultiByteToWideChar(CP_ACP, 0, s.c_str(), slength, buf, len);
    std::wstring r(buf);
    delete[] buf;
    return r;
}

int main() {
    DWORD dwSize = 0, dwDownloaded;
    LPSTR source;

    HINTERNET
            hSession = nullptr,
            hConnect = nullptr,
            hRequest = nullptr;
    BOOL bResults = FALSE;

    std::string pID;
    std::cin >> pID;
    pID = "/problem_level.php?id=" + pID;

    std::wstring tmp = s2ws(pID);
    LPCWSTR pURL = tmp.c_str();

    hSession = WinHttpOpen(L"Winhttp API",
                           WINHTTP_ACCESS_TYPE_DEFAULT_PROXY,
                           WINHTTP_NO_PROXY_NAME, WINHTTP_NO_PROXY_BYPASS, 0);

    if (hSession)
        hConnect = WinHttpConnect(hSession, L"api.solved.ac", INTERNET_DEFAULT_HTTP_PORT, 0);

    if (hConnect)
        hRequest = WinHttpOpenRequest(hConnect, L"GET", pURL, nullptr,
                                      WINHTTP_NO_REFERER, WINHTTP_DEFAULT_ACCEPT_TYPES, 0);

    if (hRequest)
        bResults = WinHttpSendRequest(hRequest, WINHTTP_NO_ADDITIONAL_HEADERS, 0,
                                      WINHTTP_NO_REQUEST_DATA, 0, 0, 0);

    if (bResults)
        bResults = WinHttpReceiveResponse(hRequest, nullptr);

    if (bResults) {
        do {
            dwSize = 0;
            if (!WinHttpQueryDataAvailable(hRequest, &dwSize))
                printf("Error %lu: in WinHttpQueryDataAvailable.\n", GetLastError());
            source = (char *)malloc(dwSize + 1);
            if (!source) {
                printf("Out Of Memory.\n");
                dwSize = 0;
            }
            else {
                ZeroMemory(source, dwSize + 1);
                if (!WinHttpReadData(hRequest, (LPVOID)source, dwSize, &dwDownloaded))
                    printf("Error %lu in WinHttpReadData.\n", GetLastError());
                else printf("%s\n", source);
                free(source);
            }
        } while (dwSize > 0);
    }

    if (!bResults)
        printf("Error %lu: Failed\n", GetLastError());

    if (hRequest) WinHttpCloseHandle(hRequest);
    if (hConnect) WinHttpCloseHandle(hConnect);
    if (hSession) WinHttpCloseHandle(hSession);
    return 0;
}