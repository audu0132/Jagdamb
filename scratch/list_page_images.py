import os
import json

extracted_dir = r'd:\React\Freelace\Jagdamb\public\images\catalogue'
files = os.listdir(extracted_dir)

page_imgs = {}
for f in files:
    if f.startswith('p') and '_' in f:
        page_num = int(f.split('_')[0][1:])
        page_imgs.setdefault(page_num, []).append(f)

for p in sorted(page_imgs.keys()):
    print(f"Page {p}: {len(page_imgs[p])} images -> {page_imgs[p]}")
