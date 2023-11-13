import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly localStorageKey = "theme-id";
  public readonly darkTheme = "dark-theme";
  public readonly lightTheme = "light-theme";

  setTheme(useStorage: boolean) {
    let updatedClasses: string;
    let darkMode: boolean = false;
    const bodyTag = document.getElementsByTagName("body")
    if (bodyTag) {
      const bodyClasses: string = bodyTag[0]?.getAttribute("class") || "";
      if (bodyClasses.includes(this.darkTheme)) {
        updatedClasses = bodyClasses.replace(this.darkTheme, "");
      } else {
        darkMode = true;
        updatedClasses = `${bodyClasses} ${this.darkTheme}`;
      }
      bodyTag[0]?.setAttribute("class", updatedClasses);
    }
    if (useStorage) {
      this.updateLocalStorage(darkMode)
    }
  }

  updateLocalStorage(darkMode: boolean) {
    localStorage.setItem(this.localStorageKey, darkMode ? this.darkTheme : this.lightTheme)
  }

  getSavedTheme() {
    return localStorage.getItem(this.localStorageKey)
  }

  isDarkMode() {
    const bodyTag = document.getElementsByTagName("body");
    if (bodyTag) {
      return bodyTag[0]?.getAttribute("class")?.includes(this.darkTheme) || false;
    }
    return false;
  }
}
