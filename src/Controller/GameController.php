<?php

namespace App\Controller;

use App\Model\WordsModels;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Error\SyntaxError;

class GameController extends AbstractController
{
    private array $css = ["settings", "navbar", "game"];
    /**
     * @throws SyntaxError
     * @throws RuntimeError
     * @throws LoaderError
     */
    public function index(): string
    {
        $css = $this->css;
        $game = new WordsModels();
        $wordsGame = json_encode($game->getAllWordsCut());

        $lettersGame = json_encode($game->getGuessLetters());

        return $this->twig->render('Game/index.html.twig', [
            "css" => $css,
            "wordsGame" => $wordsGame,
            "lettersGame" => $lettersGame
        ]);
    }
}
