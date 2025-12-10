import { RootRoute, Route, Router, Outlet } from '@tanstack/react-router';
import { HomePage } from './pages/HomePage';
import { RSVPPage } from './pages/RSVPPage';
import { Navigation } from './components/molecules';

// Create root layout
const RootLayout = () => (
  <>
    <Navigation />
    <Outlet />
  </>
);

// Create root route
const rootRoute = new RootRoute({
  component: RootLayout,
});

// Create home route
const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

// Create RSVP route
const rsvpRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/rsvp',
  component: RSVPPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([homeRoute, rsvpRoute]);

// Create and export router
export const router = new Router({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
