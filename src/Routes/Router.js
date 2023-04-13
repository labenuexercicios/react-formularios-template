import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.js/Header'
import DetalhesPost from '../pages/DetalhesPost/DetalhesPost'
import Feed from '../pages/Feed/Feed'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'

export default function Router() {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Signup />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/post/:id" element={<DetalhesPost />} />
            </Routes>
        </BrowserRouter>
    )
}
