import os

def run():
    snippets_dir = "devsnips/snippets/html-snippets"
    all_files = os.listdir(snippets_dir)
    html_files = [f for f in all_files if f.endswith('.html')]

    with open("jules-scratch/verification/all_snippets.html", "w") as f:
        f.write("<!DOCTYPE html><html><head><title>All Snippets</title></head><body>")
        for html_file in html_files:
            with open(os.path.join(snippets_dir, html_file), "r") as snippet_f:
                f.write(snippet_f.read())
        f.write("</body></html>")

if __name__ == "__main__":
    run()
