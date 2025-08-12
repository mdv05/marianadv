from PIL import Image
import numpy as np

# Open the Segal logo
img = Image.open('html/Segal-600x159.png')
print(f"Original image size: {img.size}")

# Convert to RGBA if not already
img = img.convert('RGBA')
img_array = np.array(img)

# The star appears to be in approximately the first 180 pixels to ensure we get the full star
# Adding some padding to make sure we don't cut off any points
star_portion = img.crop((0, 0, 185, 159))

# Create a new image with transparent background
# Get the pixel data
star_data = star_portion.getdata()

# Create new data with transparent background for white/near-white pixels
new_data = []
for item in star_data:
    # If the pixel is white or near-white (background), make it transparent
    if item[0] > 240 and item[1] > 240 and item[2] > 240:
        new_data.append((255, 255, 255, 0))  # Transparent
    else:
        new_data.append(item)  # Keep original color

# Update image with new data
star_portion.putdata(new_data)

# Save the cropped star with transparent background
star_portion.save('html/segal-star.png')

print(f"Segal star symbol extracted and saved as segal-star.png")
print(f"Star image size: {star_portion.size}")