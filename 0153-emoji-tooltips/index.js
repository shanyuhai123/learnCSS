const DIRECTIONS = ['top', 'bottom', 'left', 'right'];
const EVENTS = ['mouseover', 'mouseout'];
const $ = className => document.getElementsByClassName(className)[0];

DIRECTIONS.forEach(direction => {
  const emoji_direction = `emoji_${direction}`;
  const tip_direction = `tip_${direction}`;
  EVENTS.forEach(e =>
    $(`tip ${tip_direction}`).addEventListener(e, () =>
      $('emoji').classList.toggle(emoji_direction)
    )
  );
});
