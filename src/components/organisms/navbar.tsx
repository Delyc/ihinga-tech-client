'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { H3 } from '../atoms/typography';
import Button from '../atoms/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from 'lib/utils';
import { Menu, X } from 'lucide-react';

const components = [
  {
    title: 'Tour our Farm',
    href: 'tel:+250788123456',
    description:
      'We appreciate your interest in touring our farm. Click to call and book your visit now, or save this number(+250781093895) and call us later!',
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed w-full top-0 bg-white z-50 shadow-sm">
        <div className="max-w-[80rem] mx-auto px-4 py-4 flex items-center justify-between">
          <H3 className="text-primary-green font-bold">Umurage Farm</H3>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              {['home', 'about', 'gallery', 'products'].map((item) => (
                <NavigationMenuItem key={item}>
                  <Link href={`#${item}`} passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Visit</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              className="bg-primary-green text-white font-bold"
              onClick={() => setShowModal(true)}
            >
              Donate
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="space-y-4 mt-4">
              {['home', 'about', 'gallery', 'products'].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} onClick={() => setIsOpen(false)}>
                    <span className="block text-primary font-medium">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <a href={components[0].href}>
                  <span className="block text-primary font-medium">Visit</span>
                </a>
              </li>
              <li>
                <Button
                  className="bg-primary-green text-white font-bold w-full"
                  onClick={() => setShowModal(true)}
                >
                  Donate
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Support Umurage Farm</h2>
              <button onClick={() => setShowModal(false)}>
                <X className="text-gray-500 hover:text-black" />
              </button>
            </div>
            <p className="text-gray-600">
              Thank you for your interest in supporting Umurage Farm. Contact us via phone or email to learn how you can contribute.
            </p>
            <Button className="bg-primary-green text-white tracking-[2px] mt-2 lowercase">*182*1*1*0781093895*amount#</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
