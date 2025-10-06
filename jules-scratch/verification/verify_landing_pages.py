from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    landing_pages = [
        "ai-tool-launch",
        "freelancer-portfolio",
        "micro-saas-product",
        "event-conference",
        "nft-web3-project"
    ]

    for page_name in landing_pages:
        # Construct the file path to the local HTML file
        # The path needs to be absolute for the browser to open it
        file_path = os.path.abspath(f"devsnips/full-landing-pages/{page_name}/index.html")

        # Go to the local file
        page.goto(f"file://{file_path}")

        # Wait for the page to load completely
        page.wait_for_load_state('networkidle')

        # Take a screenshot
        screenshot_path = f"jules-scratch/verification/{page_name}.png"
        page.screenshot(path=screenshot_path, full_page=True)
        print(f"Screenshot saved for {page_name} at {screenshot_path}")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)