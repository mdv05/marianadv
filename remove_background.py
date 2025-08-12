#!/usr/bin/env python3
"""Remove background from profile photo and save as transparent PNG."""

from rembg import remove
from PIL import Image
import os

# Input and output paths
input_path = 'html/MarianaWebsitePhoto.jpeg'
output_path = 'html/MarianaWebsitePhoto.png'

# Open the input image
input_image = Image.open(input_path)

# Remove the background
output_image = remove(input_image)

# Save the result as a PNG with transparency
output_image.save(output_path)

print(f"Background removed successfully!")
print(f"Saved transparent image to: {output_path}")