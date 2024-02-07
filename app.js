const express=require("express");

const app=express();
app.use(express.json());

app.get('/',(req,res)=>
{
    res.send("hello from book information system");
})

let books=[]

app.post('/addbooks',async (req,res)=>
{
    const bookname=req.body.bookname;
    const author=req.body.author;
    const id=req.body.id;

    books.push({bookname,author,id});

    if(!bookname)
    {
        return res.send("book not there");
    }
    else{
        res.send("Book Added Successfully"); 
    }  
    console.log(books);
})

app.post('/updateBook',(req,res)=>
{
    const bookname=req.body.bookname;
    const author=req.body.author;
    const id=req.body.id;

    for(let i=0;i<books.length;i++)
    {
        if(books[i].author===author)
        {
            books[i].id=id;
            res.send("updated successfully");
            break;
        }
    }
    console.log(books);
})

app.post('/deletebook',(req,res)=>
{
    const id=req.body.id;

    books=books.filter((book)=>
    {
        book.id!==id;
    })
    console.log(books);
    res.send("deleted successfully");
    
})
app.listen(1000,()=>
{
    console.log("server started at 1000");
});

