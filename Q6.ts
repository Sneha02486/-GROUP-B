const a:string[]=["  Admin ", "TESTER", " qa_user ", "", "   ", "Developer"]
const b:string[]=[]
for(const c of a){
    const d=c.trim().toLowerCase();
    if(!d==''){
        b.push(d)
    }
}
console.log(b);
