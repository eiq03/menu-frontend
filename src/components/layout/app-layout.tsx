import { CategoryNav } from "@/cases/categories/components/category-nav";
import { Header } from "./header";

export function AppLayout (){
    return (
        <>
            <Header />
            <div className="mx-auto flex w-full max-w-5xl gap-6 py-8 px-6">
            
                <aside className="flex w-full flex-col">
                    <CategoryNav />
                </aside>

                <main className="flex-1 border-t border-[#CFC7BA]/70 pt-6 pb-6">
                    
                </main>
        </div>
        </>
    )
}