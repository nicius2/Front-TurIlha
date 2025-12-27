

export function CardSkeleton() {
  return (
    <div className="flex flex-col w-full max-w-[200px] bg-gray-100 rounded-3xl shadow-lg overflow-hidden animate-pulse">
      {/* Skeleton da Imagem */}
      <div className="relative bg-gray-300 w-full h-[200px]"></div>

      {/* Skeleton do Conteúdo */}
      <div className="p-4">
        {/* Skeleton do Título */}
        <div className="h-6 bg-gray-300 rounded-md w-3/4 mb-4"></div>

        {/* Skeleton da Distância */}
        <div className="flex items-center space-x-2">
          <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
          <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
        </div>

        {/* Skeleton do Botão */}
        <div className="mt-4 h-10 bg-gray-300 rounded-lg w-full"></div>
      </div>
    </div>
  );
}