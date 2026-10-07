import os
import json

base_img_dir = r'd:\React\Freelace\Jagdamb\public\images\catalogue'
available_imgs = os.listdir(base_img_dir)

# Helper to find image
def get_img(prefix):
    for f in available_imgs:
        if f.startswith(prefix):
            return f"/images/catalogue/{f}"
    return "/images/catalogue/p1_img3_800x800.png"

print("Sample image check:")
for i in range(2, 23):
    matches = [f for f in available_imgs if f.startswith(f"p{i}_")]
    print(f"Page {i}: {len(matches)} files: {matches[:3]}")
