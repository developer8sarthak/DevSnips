from playwright.sync_api import sync_playwright
import os

def run():
    files_to_capture = [
        'center-anything-flexbox.html',
        'center-anything-grid.html',
        'sticky-header.html',
        'sticky-footer.html',
        'responsive-two-column-layout.html',
        'holy-grail-layout.html',
        'equal-height-cards-flexbox.html',
        'equal-height-cards-grid.html',
        'css-masonry-layout.html',
        'aspect-ratio-boxes.html',
        'responsive-video-container.html'
    ]

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.set_viewport_size({"width": 800, "height": 600})

        for file in files_to_capture:
            filepath = f"file://{os.getcwd()}/devsnips/snippets/css-snippets/{file}"
            screenshot_path = f"jules-scratch/verification/{os.path.splitext(file)[0]}.png"

            page.goto(filepath)
            page.screenshot(path=screenshot_path)

        browser.close()

if __name__ == "__main__":
    run()
