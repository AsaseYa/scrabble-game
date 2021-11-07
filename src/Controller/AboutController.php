<?php

namespace App\Controller;

use Twig\Error\{LoaderError, RuntimeError, SyntaxError};

class AboutController extends AbstractController
{

    private array $css = ["settings", "navbar", "about"];

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
        return $this->twig->render('About/index.html.twig', ['css' => $css]);
    }
}