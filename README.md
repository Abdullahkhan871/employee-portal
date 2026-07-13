# Pull Request #1

## Feature

Built the Employee Portal routing structure.

## What I Implemented

- Created dashboard page
- Created employees page
- Created departments page
- Created settings page
- Added home page

## Folder Structure

src/
└── app/
├── page.tsx
├── dashboard/
│ └── page.tsx
├── employees/
│ └── page.tsx
├── departments/
│ └── page.tsx
└── settings/
└── page.tsx

## Questions

### 1.

if dev have to do routing manually it would less effiencet. means if dev have to edit name of page they have to changes on routing also it can make not sense. there would be hundreds of route.

### 2.

It would be deficult for dev to edit name of file which are bind to route they always have change both side.

### 3.

it would become route app/components/ but they would be error because there is no page.tsx.

### 4.

There is a major difference we use app folder to routing in our project but in components folder we usually have re usable components.

## Problems I Faced

Having problem on explaining or maybe understanding the theory concept.

# Pull Request #2

## Feature

Built layout structure in dashboard root and main root.

## What I Implemented

- Created dashboard page
  - Created employees page
  - Created departments page
  - Created settings page
- Added home page

## Folder Structure

src/
└── app/
├── layout.tsx  
 ├── page.tsx
└── dashboard/
├── layout.tsx  
 ├── page.tsx
├── employees/
│ └── page.tsx
├── departments/
│ └── page.tsx
└── settings/
└── page.tsx

## Questions

### 1. Why is a layout better than copying the same Header and Sidebar into every page?

Layout is better than copying same component which we dont want to be removed every render on same route becuase it reduce copying on diffenret files, reduce maintaibily, reduce bug fixing.

### 2. What role does {children} play in a layout?

In layout children play crucial rule like it render different pages without mounting other component and reduce load on browser.

### 3. Why do layouts improve maintainability in large applications?

Layout reduce manualy pasting same code on different pages. reduce bugs, make folder structure maintable and scalable.

### 4. Should a layout contain page-specific business logic (for example, fetching one employee's profile)? Why or why not?

No it should contain anything related to specific page logic becuse if different page render it would execute unnecessay.

## Engineering Summary

### Explain Like I'm a Junior Developer

layout is like one time work for different pages without copying them there.

### Explain Like I'm a Senior Engineer

Imaging you have logo in header but header is not in layout but added in differnt pages now if you have to change logo. it could work more but layout you need change in only one component.
