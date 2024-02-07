import { world } from 'mojang-minecraft';

world.events.beforeChat.subscribe(ev => {
  ev.sendToTargets = true;
});