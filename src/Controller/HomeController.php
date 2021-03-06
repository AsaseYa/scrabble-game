<?php

namespace App\Controller;

use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class HomeController extends AbstractController
{
    private array $css = ["settings", "navbar", "home"];

    /**
     * Display home page
     *
     * @return string
     * @throws LoaderError
     * @throws RuntimeError
     * @throws SyntaxError
     */
    public function index(): string
    {
        $css = $this->css;
        return $this->twig->render('Home/index.html.twig', [
            'css' => $css
        ]);
    }
}
