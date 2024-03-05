import "./client.js";
import { l as getContext, t as get_store_value, s as setContext } from "./ssr.js";
import { w as writable } from "./index2.js";
function useSettingsStore() {
  return getContext("settings");
}
function createSettingsStore(initialValue) {
  const baseStore = writable({ ...initialValue, recentlySaved: false });
  let timeoutId;
  async function setSettings(settings) {
    baseStore.update((s) => ({
      ...s,
      ...settings
    }));
    clearTimeout(timeoutId);
  }
  async function instantSet(settings) {
    baseStore.update((s) => ({
      ...s,
      ...settings
    }));
  }
  const newStore = {
    subscribe: baseStore.subscribe,
    set: setSettings,
    instantSet,
    update: (fn) => {
      setSettings(fn(get_store_value(baseStore)));
    }
  };
  setContext("settings", newStore);
  return newStore;
}
export {
  createSettingsStore as c,
  useSettingsStore as u
};
