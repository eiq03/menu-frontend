import type { ProductDTO } from "../dtos/product.dto"
// arquivos da pasta public/ não são importados: o Vite serve direto na raiz do site
const noProduct = "/no-product.svg"

type ProductCardProps = {
  product: ProductDTO
}

export function ProductCard({
  product
}: ProductCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border
    border-border/70 hover:border-[#B86A2C] transition-colors">

      <div className="aspect-4/3 overflow-hidden bg-[#e8e1d6]">
        <img src={product.picture ?? noProduct} 
        className="size-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="font-menu text-lg font-semibold uppercase 
           leading-tight tracking-tight"
        >
          {product.name}
        </h3>

        {product.description && (
          <p className="line-clamp-3 text-sm text-muted-foreground">
            {product.description}
          </p>
        )}

        <span className="mt-auto text-lg font-bold text-[#B86A2C]">
          {product.price}
        </span>
      </div>


    </div>
  )
}