# Roll Number Photo Viewer

A fun project where users can enter their roll number to see a beautiful photo.

## Features

- **Responsive Design**: Works on all devices (mobile, tablet, laptop, desktop)
- **Roll Number Validation**: Roll number format validation according to XXBTCSXXXHY
- **Special Cases**: Special message for 25BTCS010HY and 25BLCS010HY
- **Loading Animation**: Shows spinner until photo loads
- **English Interface**: Fully in English interface

## How to Use

1. **Open the project**: Open `index.html` file in web browser
2. **Enter Roll Number**: Enter your roll number in the roll number box
3. **Click Button**: Click "View Photo" button or press Enter
4. **View Photo**: Photo will show after 3 seconds

## Roll Number Format

- **Valid Formats**: 
  - 24BTCSXXXHY (where X are numbers)
  - 25BTCSXXXHY (where X are numbers)
  - 25BLCSXXXHY (where X are numbers)
- **Examples**: 24BTCS010HY, 25BTCS015HY, 25BTCS999HY
- **Special Cases**: Only 25BLCS010HY will show "Try your roll no." message
- **Invalid Formats**: 26BTCSXXXHY, 27BTCSXXXHY, etc. → Will show "Invalid Roll No." message

## Technical Details

- **HTML5**: Semantic HTML structure
- **CSS3**: Responsive design, animations, gradients
- **JavaScript**: Roll number validation and UI logic
- **Mobile First**: Optimized for mobile devices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## File Structure

```
├── index.html      # Main HTML file
├── style.css       # CSS styles
├── script.js       # JavaScript logic
└── README.md       # Project documentation
```

## Photo Source

Photo is taken from Adobe Stock: [Photo Link](https://as1.ftcdn.net/jpg/12/15/20/74/1000_F_1215207426_CyWsTkMt5vb7bwIv0NcsYBreMNEaBeAP.jpg)

## Note

This is a fun project. Below the photo it says: "कृपया दिल पर न लें, हो सके तो फेंफड़ों पर लें" 😄
