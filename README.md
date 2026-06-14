# Evonne Chen Portfolio Website

Evonne Chen 的個人作品集網站，內容包含 UI/UX 作品、個人簡介、技能、工作經歷與履歷下載。專案本身是靜態網站，主要由 HTML、CSS、JavaScript 與圖片素材組成。

## 專案結構

```text
.
├── index.html              # 英文版首頁
├── index_tw.html           # 繁體中文版首頁
├── css/                    # 網站樣式與 icon font CSS
├── js/                     # 互動效果、選單、tab、lightbox、isotope
├── image/                  # 圖片、作品集素材、履歷 PDF
├── font/                   # 字型檔
├── design_templates/       # 舊版或作品展示用模板
├── shell/                  # 伺服器自動更新用腳本
├── compose.yaml            # Docker Compose nginx 服務
└── evonne-chen.conf        # 反向代理與 HTTPS nginx 設定範例
```

## 本機預覽

這是純靜態網站，可以直接用瀏覽器開啟：

```text
index.html
```

中文版頁面：

```text
http://localhost:8000/index_tw.html
```
