<?php
// Entité permettant de stocker les données utilisateurs
namespace App\Entity;

use App\Repository\UserRepository;
use App\Traits\TimestampableTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\Table(name: '`user`')]
#[UniqueEntity(fields: ['email'], message: 'Il existe déjà un compte utilisant cette adresse mail')]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{

    use TimestampableTrait;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[Assert\Email(message: "L'email '{{ value }}' n'est pas valide.")]
    #[Assert\NotBlank(message: "L'email ne peut pas être vide.")]
    #[Assert\Length(max: 180, maxMessage: "L'email ne peut pas faire plus de 180 caratères.")]
    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    #[Assert\Length(min: 6, minMessage: "Votre mot de passe doit faire plus de 6 caractères.")]
    #[Assert\NotBlank(message: "Le mot de passe ne peut pas être vide.")]
    #[Assert\Regex(pattern: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}$/', message: "Le mot de passe doit contenir au moins : 1 majuscule, 1 minuscule, 1 chiffre et 1 caratère spécial.")]
    private ?string $password = null;

    #[Assert\NotBlank(message: "Le nom ne peut pas être vide.")]
    #[Assert\Length(max: 100, min: 1, maxMessage: "Votre nom ne peut faire plus de 100 caractère", minMessage: "Votre nom doit faire plus d'un caractère")]
    #[Assert\Regex(pattern: '/^[a-zA-ZÀ-ÿ]+([-\'\s][a-zA-ZÀ-ÿ]+)*$/', message: "Le nom n'est pas valide")]
    #[ORM\Column(length: 100)]
    private ?string $name = null;

    #[Assert\NotBlank(message: "Le prénom ne peut pas être vide.")]
    #[Assert\Length(max: 100, min: 1, maxMessage: "Votre prénom ne peut faire plus de 100 caractère", minMessage: "Votre prénom doit faire plus d'un caractère")]
    #[Assert\Regex(pattern: '/^[a-zA-ZÀ-ÿ]+([-\'\s][a-zA-ZÀ-ÿ]+)*$/', message: "Le prénom n'est pas valide")]
    #[ORM\Column(length: 100)]
    private ?string $firstname = null;

    #[Assert\Length(min: 10, max: 10, exactMessage: "Le numéro de téléphone doit faire 10 caractères")]
    #[Assert\Regex(pattern: '/^[0-9]{10}$/', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotBlank(message: "Le numéro de téléphone ne peut pas être vide")]
    #[Assert\NotEqualTo(value: '0000000000', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '1111111111', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '2222222222', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '3333333333', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '4444444444', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '5555555555', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '6666666666', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '7777777777', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '8888888888', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '9999999999', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '1234567890', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '0987654321', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '0123456789', message: "Le numéro de téléphone n'est pas valide")]
    #[Assert\NotEqualTo(value: '9876543210', message: "Le numéro de téléphone n'est pas valide")]
    #[ORM\Column(length: 20)]
    private ?string $phone = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $birthday = null;

    #[ORM\Column(length: 10)]
    #[Assert\NotBlank(message: 'Vous devez selectionner un genre.')]
    private ?string $gender = null;

    #[ORM\Column(type: 'boolean')]
    private $isVerified = false;


    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): static
    {
        $this->name = $name;

        return $this;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): static
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(string $phone): static
    {
        $this->phone = $phone;

        return $this;
    }

    public function getBirthday(): ?\DateTimeImmutable
    {
        return $this->birthday;
    }

    public function setBirthday(?\DateTimeImmutable $birthday): static
    {
        $this->birthday = $birthday;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->gender;
    }

    public function setGenre(string $gender): static
    {
        $this->gender = $gender;

        return $this;
    }

    public function isVerified(): bool
    {
        return $this->isVerified;
    }

    public function setIsVerified(bool $isVerified): static
    {
        $this->isVerified = $isVerified;

        return $this;
    }

    public function __toString()
    {
        return $this->getBirthday();
    }
}
