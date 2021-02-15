import s from "./Blocks.module.css";

const Blocks = () => {
    return (
        <div id={s.colored_grid}>
                <div class={s.red}>1</div>
                <div class={s.green}>2</div>
                <div class={s.blue}>3</div>
                <div class={s.pink}>4</div>
            </div>
    )
}

export default Blocks;