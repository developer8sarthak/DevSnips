import asyncio
import os
from playwright.async_api import async_playwright, expect

async def main():
    """
    This test verifies that the dark mode theme preference persists after a page reload.
    """
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()
        page = await context.new_page()

        # Get the absolute path to the HTML file
        # This makes the test runnable from any directory
        current_dir = os.path.dirname(os.path.abspath(__file__))
        file_path = "file://" + os.path.join(current_dir, '..', 'devsnips', 'snippets', 'js-snippets', 'dark-mode-toggle.html')

        # 1. Go to the page and ensure it starts in light mode (no theme in localStorage)
        await page.goto(file_path)
        await expect(page.locator("body")).not_to_have_class("dark-mode")

        # 2. Click the toggle button to enable dark mode
        await page.locator("#darkModeToggle").click()
        await expect(page.locator("body")).to_have_class("dark-mode")

        # 3. Reload the page
        await page.reload()

        # 4. Assert that dark mode is still enabled due to localStorage persistence
        await expect(page.locator("body")).to_have_class("dark-mode")

        print("✅ Test Passed: Dark mode setting successfully persists after page reload.")

        # Cleanup: Clear localStorage to ensure test isolation
        await page.evaluate("localStorage.clear()")
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())