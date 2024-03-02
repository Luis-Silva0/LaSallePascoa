

export default function Schedule({ativ}) {
    console.log(ativ)
    if (ativ) return(
        <div className="flex text-black">
            {ativ.nome}
        </div>
        );
}