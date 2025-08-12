from PIL import Image
import numpy as np

# Open the Sicily logo
img = Image.open('html/images.png')
print(f"Original Sicily logo size: {img.size}")

# The image is already circular with transparent background
# Convert to RGBA to maintain transparency
img = img.convert('RGBA')

# Since it's already a circle with transparent background, we just need to save it with a better name
img.save('html/sicily-logo.png')

print("Sicily logo saved as sicily-logo.png")
print(f"Logo size: {img.size}")