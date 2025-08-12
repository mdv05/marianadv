from PIL import Image
import numpy as np

# Open the Segal logo
img = Image.open('html/Segal-600x159.png')
img_array = np.array(img)

# The star is on the left side, approximately in the first 160 pixels width
# Let's crop to just the star portion (estimated at first 160x159 pixels)
star_portion = img.crop((0, 0, 160, 159))

# Save the cropped star
star_portion.save('html/segal-star.png')

print("Segal star symbol extracted and saved as segal-star.png")