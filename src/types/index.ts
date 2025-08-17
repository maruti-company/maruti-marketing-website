// Common type definitions for the Maruti Marketing Website

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  message: string;
}
