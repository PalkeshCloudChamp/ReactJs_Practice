var items = [{ id: 2, title: "...", pId: 62 },
{ id: 1, title: "...", pId: 43 },
{ id: 4, title: "...", pId: 74 },
{ id: 9, title: "...", pId: 35 },
{ id: 5, title: "...", pId: 81 }];

sortByProperty = (property)=> {
    return (a, b)=> {
        console.log(a[property])
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}
items.sort(sortByProperty("id"));
// console.log(items)