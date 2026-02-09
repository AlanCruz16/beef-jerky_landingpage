import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-background border-t border-white/5 relative z-20 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-gold text-3xl">agriculture</span>
                            <span className="font-display font-black text-2xl tracking-[0.2em] text-white uppercase">Lavinia</span>
                        </Link>
                        <p className="text-muted font-light text-sm leading-relaxed max-w-xs">
                            Nutrición real para una vida real. Sin atajos, solo ingredientes que tu cuerpo reconoce y agradece.
                        </p>
                        <div className="flex gap-4">
                            {['facebook', 'instagram', 'twitter'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-berry hover:border-berry transition-all duration-300 group">
                                    <i className={`fab fa-${social} text-white/60 group-hover:text-white`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Explorar</h4>
                        <ul className="space-y-4">
                            {['Shop', 'Nuestra Historia', 'Blog', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted hover:text-gold transition-colors text-sm font-light">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Encuéntranos</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-gold text-lg mt-1">storefront</span>
                                <span className="text-muted font-light text-sm">
                                    <strong className="block text-white font-medium mb-1">HEB México</strong>
                                    Pasillo de Carnes Frías
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-gold text-lg mt-1">storefront</span>
                                <span className="text-muted font-light text-sm">
                                    <strong className="block text-white font-medium mb-1">City Market</strong>
                                    Zona Gourmet
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-gold text-lg mt-1">local_shipping</span>
                                <span className="text-muted font-light text-sm">
                                    Envíos a todo México<br />
                                    Gratis en pedidos +$999
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-surface-light p-6 rounded-xl border border-white/5">
                        <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-sm">Newsletter</h4>
                        <p className="text-muted text-xs mb-4">Recibe recetas y ofertas exclusivas.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Tu correo"
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-berry transition-colors"
                            />
                            <button className="w-full bg-berry hover:bg-rose-600 text-white font-bold py-3 rounded-lg text-sm uppercase tracking-wider transition-colors">
                                Suscribirme
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/20 text-xs">
                        © 2026 Casa Lavínia. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6 text-xs text-white/20">
                        <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-white transition-colors">Términos</Link>
                    </div>
                </div>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        </footer>
    );
}
