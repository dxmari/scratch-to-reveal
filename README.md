# Baby Scratch Reveal 🍼

An interactive web application that creates a scratch-off card experience to reveal a baby's name. Perfect for gender reveals, baby announcements, or any surprise reveal event!

## 🎯 Features

- **Interactive Scratch-Off**: Realistic scratch-off effect using HTML5 Canvas
- **Mobile & Desktop Support**: Works seamlessly on all devices
- **Progress Tracking**: Visual progress indicator as you scratch
- **Celebration Animation**: Confetti and toast notifications when revealed
- **Responsive Design**: Adapts to different screen sizes
- **Touch Optimized**: Prevents scrolling and zooming during interaction

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open** `scratch_reveal_baby_ruthran.html` in any modern web browser
3. **Start Scratching** to reveal the hidden message!

## 🎮 How to Use

1. **Load the Page**: The scratch-off card will appear with a dark overlay
2. **Scratch Away**: Use your mouse (desktop) or finger (mobile) to scratch the overlay
3. **Watch Progress**: The hidden message gradually appears as you scratch
4. **Celebration**: When 60% is scratched, enjoy the confetti animation!
5. **Reset**: Use the "Reset Card" button to start over

## 🛠️ Technical Details

### Built With
- **HTML5**: Structure and semantic markup
- **CSS3**: Styling, animations, and responsive design
- **Vanilla JavaScript**: Interactive functionality and canvas manipulation
- **HTML5 Canvas**: Scratch-off effect implementation

### Key Technologies
- **Canvas API**: For the scratch-off visual effect
- **Touch Events**: Mobile gesture handling
- **CSS Animations**: Smooth transitions and confetti effects
- **Responsive Design**: Mobile-first approach

### Browser Compatibility
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Customization

### Changing the Baby Name
Edit line 211 in the HTML file:
```html
<div class="hidden-message">
    Say hello to Baby [YOUR_NAME] 💙
</div>
```

### Modifying the Initial Message
Edit lines 200-202:
```html
<div class="initial-message">
    We've been keeping a little secret… 🤫
    Scratch to reveal the name of our tiny superstar!
</div>
```

### Adjusting Colors
The main color scheme is defined in the CSS:
- **Background**: Purple to blue gradient (`#667eea` to `#764ba2`)
- **Card**: White with rounded corners
- **Scratch Layer**: Dark diagonal stripes (`#2c2c2c`)
- **Text**: Blue (`#4169e1`)

### Changing Reveal Threshold
Modify line 234 to change how much needs to be scratched:
```javascript
let revealThreshold = 0.6; // 60% - change to 0.5 for 50%, etc.
```

## 📱 Mobile Features

- **Touch Optimization**: Prevents accidental scrolling during scratching
- **Gesture Prevention**: Disables zoom and pull-to-refresh
- **Responsive Layout**: Adapts to different screen sizes
- **Touch-Friendly**: Large touch targets and smooth interactions

## 🎉 Animation Details

- **Scratch Effect**: Uses `destination-out` composite operation for realistic scratching
- **Progress Bar**: Hidden by default, tracks scratching progress
- **Confetti**: 50 colorful particles with random timing and physics
- **Toast Notification**: Slides in from top with celebration message
- **Fade Transition**: Smooth canvas fade-out when complete

## 🔧 Development

### File Structure
```
scratch-reveal/
├── scratch_reveal_baby_ruthran.html  # Main application file
└── README.md                         # This file
```

### Key Functions
- `initCanvas()`: Sets up the scratch-off canvas
- `scratchAt(x, y)`: Handles individual scratch actions
- `updateProgress()`: Calculates and displays progress
- `revealComplete()`: Triggers celebration animations
- `createConfetti()`: Generates confetti particles

## 🎨 Design Philosophy

This project combines:
- **Nostalgia**: Scratch-off lottery ticket experience
- **Modern Web**: Clean, responsive design
- **Accessibility**: Works on all devices and browsers
- **Performance**: Lightweight with smooth animations
- **User Experience**: Intuitive and engaging interaction

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own baby announcements! Some ideas for enhancements:

- Add sound effects
- Multiple scratch cards
- Photo backgrounds
- Different scratch patterns
- Social sharing features

## 🎊 Use Cases

- **Baby Gender Reveals**: Perfect for announcing boy/girl
- **Name Reveals**: Share the chosen baby name
- **Birth Announcements**: Creative way to announce the birth
- **Gender Reveal Parties**: Interactive element for celebrations
- **Social Media**: Shareable, engaging content

---

**Made with 💙 for Baby Ruthran and all the little ones to come!**
