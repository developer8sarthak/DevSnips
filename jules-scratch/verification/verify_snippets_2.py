from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        snippets_dir = "devsnips/snippets/html-snippets"

        # Get all html files in the directory
        all_files = os.listdir(snippets_dir)
        new_snippets = [f for f in all_files if f.endswith('.html')]

        for i, snippet_file in enumerate(new_snippets[20:40]):
            filepath = os.path.join(snippets_dir, snippet_file)
            page.goto(f"file://{os.path.abspath(filepath)}")
            page.screenshot(path=f"jules-scratch/verification/snippet_{i+20}.png")

        browser.close()

if __name__ == "__main__":
    run()
