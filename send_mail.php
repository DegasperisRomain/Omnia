<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = $_POST['recipient'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Configuration de l'API Mailgun
    $apiKey = 'a2dd40a3-e6c46f96';
    $domain = 'romain-de-gasperis.fr';
    $fromEmail = 'rdegasperis11@gmail.com';

    // Fonction pour envoyer l'e-mail
    function sendMail($apiKey, $domain, $fromEmail, $toEmail, $subject, $message) {
        $url = 'https://api.mailgun.net/v3/' . $domain . '/messages';
        $postData = [
            'from'    => $fromEmail,
            'to'      => $toEmail,
            'subject' => $subject,
            'text'    => $message
        ];

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
        curl_setopt($ch, CURLOPT_USERPWD, 'api:' . $apiKey);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($postData));

        $result = curl_exec($ch);
        if (curl_errno($ch)) {
            echo 'Erreur:' . curl_error($ch);
        } else {
            echo 'E-mail envoyé avec succès!';
        }

        curl_close($ch);
    }

    // Appel de la fonction pour envoyer l'e-mail
    sendMail($apiKey, $domain, $fromEmail, $recipient, $subject, $message);
}
?>
