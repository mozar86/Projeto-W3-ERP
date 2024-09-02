import { useState, useEffect } from "react";
import axios from "axios";
import {
    ContentArea,
    DashboardBar,
    FilterIcon,
    InputContainer,
    PageTitle,
    ProdutosContainer,
    SearchBar,
    SearchIcon
} from "./Produtos-Styles";
import ProductsList from "../../components/produtos/ProductsList";
import Header from "../../components/dashboard/Header";
import Sidebar from "../../components/dashboard/Sidebar";

const Produtos: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [products, setProducts] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                setProducts(response.data.slice(0, 12));
            })
            .catch(error => {
                console.error("Erro ao buscar produtos:", error);
            });
    }, []);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <ProdutosContainer>
                <Sidebar isOpen={isSidebarOpen} />
                <ContentArea isSidebarOpen={isSidebarOpen}>
                    <Header onToggleSidebar={handleToggleSidebar} isSidebarOpen={isSidebarOpen} />
                    <PageTitle>Produtos</PageTitle>
                    <DashboardBar>
                        <InputContainer>
                            <SearchBar
                                placeholder="Pesquise uma palavra-chave"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <SearchIcon src="../src/assets/search-icon.png" alt="lupa" />
                            <FilterIcon src="../src/assets/filter-icon.png" alt="filtrar por" />
                        </InputContainer>
                    </DashboardBar>
                    <ProductsList products={filteredProducts} />
                </ContentArea>
            </ProdutosContainer>
        </>
    );
}

export default Produtos;
