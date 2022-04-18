export interface State{ 
    categories: boolean,
    user: boolean,
    favorite: boolean 
}
export interface Prop{
    state:State,
    dispatch:React.Dispatch<{type:string}>
}
export interface Clear{
    clear:()=>void
}