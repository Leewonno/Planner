import header from "../css/header.module.css";

export default function Header(){

    return (
    <header className={header.header}>
        <div className={header.left}>
            <a href="/" className={header.logo}>Planner</a>
        </div>
        <div className={header.right}></div>
    </header>
    
    )
}