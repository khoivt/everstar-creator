enum RouteMain {
  HOME = "/",
  POLICY = "/policy",
  BLOG = "/blogs",
  SERVICE = "/service",
}

export const SECTION_IDS = ["homepage", "introduce", "contact", "brand-cooperation", "supporter", "idol"];

export enum RouteSection {
  HOMEPAGE = "#homepage",
  INTRODUCE = "#introduce",
  CONTACT = "#contact",
  BRAND_COOPERATION = "#brand-cooperation",
}

const ROUTER = {
  HOME_HOMEPAGE: `${RouteMain.HOME}${RouteSection.HOMEPAGE}`,
  HOME_INTRODUCE: `${RouteMain.HOME}${RouteSection.INTRODUCE}`,
  HOME_CONTACT: `${RouteMain.HOME}${RouteSection.CONTACT}`,
  POLICY: RouteMain.POLICY,
  BLOG: RouteMain.BLOG,
  SERVICE: RouteMain.SERVICE,
  SERVICE_TRAINING_IDOL: RouteMain.SERVICE,
  SERVICE_COLAB_BRAND: `${RouteMain.SERVICE}${RouteSection.BRAND_COOPERATION}`,
};
RouteMain;

export default ROUTER;
