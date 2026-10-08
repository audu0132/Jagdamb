import fitz

doc = fitz.open(r'C:\Users\ASUS\Downloads\CAT-MA-815BS.pdf')
for i, page in enumerate(doc):
    for j, img in enumerate(page.get_images()):
        xref = img[0]
        base = doc.extract_image(xref)
        w, h = base["width"], base["height"]
        ext = base["ext"]
        filename = f'scratch/p{i+1}_img{j}_{w}x{h}.{ext}'
        with open(filename, 'wb') as f:
            f.write(base['image'])
        print(f"Saved {filename}")
