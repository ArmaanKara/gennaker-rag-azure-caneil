import { c as create_ssr_component, f as subscribe, a as add_attribute } from "./ssr.js";
import { p as page } from "./stores.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { classNames = "" } = $$props;
  if ($$props.classNames === void 0 && $$bindings.classNames && classNames !== void 0)
    $$bindings.classNames(classNames);
  $$unsubscribe_page();
  return `${`<svg height="30" width="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"${add_attribute("class", classNames, 0)}><path d="M4.06151 14.1464C4.06151 11.8818 4.9611 9.71004 6.56237 8.10877C8.16364 6.5075 10.3354 5.60791 12.6 5.60791H16.5231C18.6254 5.60791 20.6416 6.44307 22.1282 7.92965C23.6148 9.41624 24.45 11.4325 24.45 13.5348C24.45 15.6372 23.6148 17.6534 22.1282 19.14C20.6416 20.6266 18.6254 21.4618 16.5231 21.4618H7.08459L4.63844 23.8387C4.59547 23.8942 4.53557 23.9343 4.4678 23.9527C4.40004 23.9712 4.32811 23.9671 4.2629 23.941C4.1977 23.9149 4.14276 23.8683 4.10643 23.8082C4.07009 23.7481 4.05432 23.6778 4.06151 23.6079V14.1464Z" class="fill-primary-500"></path></svg>`}`;
});
export {
  Logo as L
};
