const CardDouble = () => {
  return (
    <div className="bg-ternary-50 shadow-lg p-6 text-primary-950 flex flex-col gap-6 md:flex-row md:items-center md:max-w-2xl md:m-auto">
      <div className="text-center text-xl md:flex-1">
        <p>Tudo isso por apenas</p>
        <p className="text-5xl font-bold">R$ 40,09*</p>
        <p className="text-sm">
          Preço sujeito a alterações *valor por sócio, consulte sobre
          dependentes e agregados.
        </p>
      </div>
      <div className="text-center text-xl md:flex-1 md:text-left">
        <ul>
          <li>Acesso grátis ao Clube de Campo</li>
          <li>Atividades Físicas*</li>
          <li>Escolinhas*</li>
          <li>Eventos esportivos*</li>
          <li>Excursões*</li>
          <li>Convênio médico*</li>
          <li>Clube de desconto*</li>
          <li>*Consulte os valores</li>
        </ul>
      </div>
    </div>
  )
}

export default CardDouble
