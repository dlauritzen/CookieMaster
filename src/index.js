
import Settings from './Settings';
import { Game } from './Window';

// Announce we've loaded.
if (Game.prefs.popups) {
    Game.Popup(Settings.AddOn.Name + " version " + Settings.AddOn.Version + " loaded!");
} else {
    Game.Notify(Settings.AddOn.Name + " version " + Settings.AddOn.Version + " loaded!", "", "", 1, 1);
}

// Grant the shadow achievement for using an add-on.
Game.Win("Third-party");
