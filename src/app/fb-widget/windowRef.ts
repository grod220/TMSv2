function _window():any {
  return window;
}

export class WindowRef {
    public static get():any {
        return _window();
    }
}
