Next JS

1 . -> Comtrol Floe 
    1 npm run dev -> layout.tsx-> root

2. Routing
    in this routing is folder or a file in src folder inside app folder and router file or route folder and its name should be page.tsx or page.js

    1 Default Route  -> main app folder has page.tsx which is default route

    2 UserDefined Route -> inside app folder , many folders with page.tsx file are userDefined Route

   3 Nested Routes -> e.g localhost:3000/blog/second 
   -> create nested folder structure and apply same page.tsx for each routr(Folder)

   4 Dynamic Routes -> eg.->  Products and lisitng page 3000/products -> display lising of products
    
        3000:/products/id -> displays details of thst product

        foldername shhould be inside [] -> [productid]
    
    5 Nested Dynamic Routes -> 
        same as above  [productsid] -> reviews -> [reviewwsid] -> page.tsx
    
    6 Authentication Routes ( Route Gropups) ->
         placed all authentication routes in same folder.
         syntax -> (routeGroup Folder Name) e.g (auth)

3 . Layouts
    -> layout.tsx in app is root and responisble to render all components ui;
    header -> content -> footer (layout)

    3.1 Nested Layouts
    3.2 Nested Layouts
    3.3 Group Layouts

4. Meta Deta
    -> 