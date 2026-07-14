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

# Pull Request #3

## Feature

Built layout structure in dashboard root and main root.

## Questions

### 1. Why does Next.js separate loading, errors, and page rendering into different files instead of putting everything inside page.tsx?

if we use everthing in page.tsx it would not be good for scalability and maintainbility.

### 2. What's the difference between an application error and missing data? Give one real-world example of each.

An application error means when are having some method excute to find specific user in our system but got unexpected error. Missing data means we able to connect to data base but did not find any requested data for example we had id of an user but that user does not exist in our system.

### 3. Why is returning <h1>Not Found</h1> not the same as calling notFound()?

Because h1 element would show same simple UI, but if we use notFound() method it would call not-found.tsx file.

### 4. Suppose the employee page fetches employee data. Should that fetch happen in: dashboard/layout.tsx or employees/page.tsx Explain your reasoning.

It should fetch only in employees/page.tsx becuase only working for employess route content and not for shared UI.

## Engineering Summary

### 1. Explain Like I'm a Junior Developer

layout is like one time work for different pages without copying them there.

### Explain Like I'm a Senior Engineer

Imaging you have logo in header but header is not in layout but added in differnt pages now if you have to change logo. it could work more but layout you need change in only one component.

## Production Challenge

### Your manager says:

### "All pages in the Dashboard should show the same loading screen while data is loading."

### Without writing code, answer:

### Which file would you create?

i would create loading.tsx in dashboard route file.

### Why would you create it there instead of adding loading logic to every page?

By creating in dashboard file it would remove duplication and repetivity and bug emerging. Also it would be easier to maintain and scale.

## Trade-offs I Learned

Feature:
Layouts

Pros:
I learned we can used multiple shared UI component in on place and can change render children for different route witout re mounting again same UI which does not need it.

Cons:
Have to make extra files. difficult in beginning.

When I would use it:
I would use when i want component like header footer sidebar to render one time but different route content to change as route change.

When I would avoid it:
I would avoid when i know there is no need for shared component UI to be render on same route.
