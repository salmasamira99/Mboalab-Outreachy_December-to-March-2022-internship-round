<?php include 'i18n_setup.php' ?>

<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/libs/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/fonts/fontawesome-free-5/css/all.min.css">
    <link rel="stylesheet" href="assets/libs/owlcarousel/dist/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="assets/libs/owlcarousel/dist/assets/owl.theme.default.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/common.css">

    <link rel="shortcut icon" type="image/svg" href="assets/icons/MboaLabLogo.png"/>
    <title>Mboalab</title>
</head>
<body data-spy="scroll" data-target="#navbarSupportedContent">
<div class="preloader">
    <svg class="page-spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
     </svg>
</div>

<header class="header sticky">
    <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="assets/icons/MboaLabLogo.png" class=" img-fluid">
            </a>
            <button class="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#home"><?= _('home') ?></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about"><?= _('about') ?></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#data"><?= _('data_collection') ?></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contribute"><?= _('contribution') ?></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#outreachy"><?= _('outreachy') ?></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#team"><?= _('team') ?></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact"><?= _('contact') ?></a>
                    </li>
                    <li class="language">
                        <span><i class="fas fa-globe"></i></span>
                        <select class="selectpicker border-0" data-width="fit" id="change_lang">
                            <option
                                value="en"
                                <?= $_COOKIE['lang'] == 'en' ? 'selected' : ''?>
                                data-content='<span class="flag-icon flag-icon-us"></span> English'>English</option>
                            <option
                                value="fr"
                                <?= $_COOKIE['lang'] == 'fr' ? 'selected' : ''?>
                                data-content='<span class="flag-icon flag-icon-fr"></span> French'>Français</option>
                        </select>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
</header>

<main role="main" id="main">
    <section id="home" class="">
        <div class="home-slider owl-carousel owl-theme">
            <div class="home-slider-item bg-1">
                <div class="container">
                    <div class="body">
                        <div class="row">
                            <div class="col-lg-10 col-xl-9">
                                <div class="text-white">
                                    <h6 class="text-uppercase font-weight-medium mb-2"><?= _('home_title_1') ?></h6>
                                    <h1 class="home-slider-heading mb-3 mb-lg-5 text-capitalize"><?= _('home_caption_1') ?></h1>
                                    <a href="#" class="btn btn-primary"><?= _('learn_more') ?></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-slider-item bg-2">
                <div class="container">
                    <div class="body">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="text-white">
                                    <h6 class="text-uppercase font-weight-medium mb-2"><?= _('home_title_2') ?></h6>
                                    <h1 class="home-slider-heading mb-3 mb-lg-5 text-capitalize"><?= _('home_caption_2') ?></h1>
                                    <a href="#" class="btn btn-primary"><?= _('learn_more') ?></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="home-slider-item bg-3">
                <div class="container">
                    <div class="body">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="text-white">
                                    <h6 class="text-uppercase font-weight-medium mb-2"><?= _('home_title_3') ?></h6>
                                    <h1 class="home-slider-heading mb-3 mb-lg-5 text-capitalize"><?= _('home_caption_3') ?> </h1>
                                    <a href="#" class="btn btn-primary"><?= _('learn_more') ?></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class=" text-center">
                <span class="text-secondary text-uppercase"><?= _('what_is') ?></span>
                <h3 class="text-primary">MboaLab</h3>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-9 col-11">
                    <?= _('what_is_mboalab') ?>
                    <p><?= _('visit_website') ?> <a href="https://www.mboalab.africa/" target="_blank">MboaLab</a></p>
                    <div class="img-wrapper my-5">
                        <img src="assets/images/asset10.jpg" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about" class="section-area">
        <div class="page-header container-fluid">
            <div class="page-title">
                <span class="text-secondary text-uppercase"><?= _('get_to_know_us') ?></span>
                <h3><?= _('about_us') ?></h3>
            </div>
        </div>
        <div class="container my-5 py-4">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6">
                    <div class="section-title mb-4">
                        <h5 class="text-secondary title"><?= _('aim_mission') ?></h5>
                    </div>

                    <p><?= _('mboalab_aim') ?></p>
                    <div class="abt-list">
                        <ul>
                            <?= _('abt_list') ?>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-6 my-2">
                    <div>
                        <img src="assets/images/asset6.jpg" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="container mt-5 py-4">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 order-2 order-lg-1">
                    <div class="img-wrapper">
                        <img src="assets/images/asset4.jpg" class="img-fluid">
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 ">
                    <h5 class="text-secondary mb-4"><?= _('vision') ?></h5>
                    <?= _('vision_list') ?>
                    <h5 class="text-secondary mb-4"><?= _('mission') ?></h5>
                    <?= _('mission_list') ?>
                </div>
            </div>
        </div>
    </section>

    <section id="data" class="section-area">
        <div class="container-fluid page-header">
            <div class="page-title">
                <span class="text-secondary text-uppercase"><?= _('how_we_work') ?></span>
                <h3><?= _('data_collection') ?></h3>
            </div>
        </div>
        <div class="container py-5">
            <div class="row justify-content-center mb-5">
                <div class="col-lg-10 ">
                    <h4 class="text-center my-5"><?= _('improve_diagnostics') ?></h4>
                    <h6 class="text-secondary"><?= _('context') ?></h6>
                    <?= _('context_content') ?>
                    <ul>
                        <li><strong><?= _('microbiological_cultures') ?></strong>
                            <p><?= _('mc_content') ?></p>
                        </li>
                        <li><strong><?= _('antibody_detection') ?></strong>
                            <p><?= _('ad_content') ?></p>
                        </li>
                    </ul>
                    <p><?= _('misdiagnosis') ?></p>

                    <h6 class="text-secondary mt-5"><?= _('opportunities') ?></h6>
                    <?= _('opportunities_content') ?>
                </div>
            </div>

            <div class="section-title">
                <h4 class="text-secondary"><?= _('proposed_tool') ?></h4>
            </div>

            <?= _('tool_content') ?>

            <div class="mt-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-xl-5 my-2">
                        <div class="section-title">
                            <h4 class="text-secondary"><?= _('data_collected') ?></h4>
                        </div>
                        <p><?= _('with_the_tool') ?></p>
                        <ul class="data-list">
                            <?= _('tool_list') ?>
                        </ul>
                    </div>
                    <div class="col-lg-6 col-xl-7 my-2">
                        <div class="img-wrapper">
                            <img src="assets/images/asset2.png" class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>

    <section id="contribute" class="section-area">
        <div class="page-header container-fluid">
            <div class="page-title">
                <span class="text-secondary text-uppercase"><?= _('project') ?></span>
                <h3><?= _('contribution') ?></h3>
            </div>
        </div>
        <div class="container mt-5">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6">
                    <img class="img-fluid" src="assets/images/typhoid2.jpg">
                </div>
                <div class="col-lg-6">
                    <p><?= _('contribution_content') ?></p>
                    <ul>
                        <?= _('contribution_list') ?>
                    </ul>
                </div>
            </div>
            <div class="mt-5">
                <div class="section-title ">
                    <h4 class="text-secondary"><?= _('how_to_contribute') ?></h4>
                </div>
                <p><?= _('this_project_contribution') ?>
                    <a href="https://chat.whatsapp.com/FL1te2yu2bg4wlYzuk43Ek" target="_blank"><?= _('join_group') ?></a></p>
                <div class="row justify-content-center mt-5">
                    <div class="col-md-4 col-sm-6 my-2">
                        <div class="contribution-card">
                            <img src="assets/icons/window.png" class="pt-1">
                            <h6 class="my-2"><?= _('coding') ?></h6>
                            <p><?= _('coding_contribution') ?> </p>
                            <a href="https://github.com/Mboalab/Mboalab-Outreachy_December-to-March-2022-internship-round"
                            target="_blank" class="btn btn-primary"><?= _('contribute') ?></a>
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 my-2">
                        <div class="contribution-card">
                            <img src="assets/icons/research.png" class="pt-1">
                            <h6 class="my-2"><?= _('image_provision') ?></h6>
                            <p><?= _('image_contribution') ?> </p>
                            <a href="#"
                            target="_blank" class="btn btn-primary"><?= _('contribute') ?></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <section id="outreachy" class="section-area">
        <div class="page-header container-fluid">
            <div class="page-title">
                <span class="text-secondary text-uppercase"><?= _('open_source_project') ?></span>
                <h3>Outreachy</h3>
            </div>
        </div>
        <div class="container mt-5">
            <div class="mb-5">
                <div class="section-title">
                    <h4 class=""><?= _('what_is_open_source') ?></h4>
                </div>
                <?= _('open_source_def') ?>
                <ul class="mb-4">
                    <?= _('open_source_list') ?>
                </ul>
                <div class="section-title">
                    <h4 class=""><?= _('what_is_outreachy') ?></h4>
                </div>
                <p><a href="http://www.outreachy.org/" target="_blank" class="text-underline font-weight-medium text-secondary">Outreachy</a>
                    <?= _('outreachy_def') ?></p>
                <ul>
                    <?= _('outreachy_list_1') ?>
                </ul>
                <p><?= _('outreachy_provides') ?>
                </p>

                <div class=" my-2">
                    <h6><?= _('outreachy_process') ?></h6>
                    <ol>
                        <?= _('outreachy_list_2') ?>
                    </ol>
                </div>
                <div class="row justify-content-center align-items-center mt-4">
                    <div class="col-md-6 my-2">
                        <h6><?= _('outreachy_runs_twice') ?></h6>
                        <div class="table-responsive">
                            <table class="table table-bordered ">
                                <thead>
                                  <tr>
                                    <th scope="col">Outreachy</th>
                                    <th scope="col"><?= _('may_internships') ?></th>
                                    <th scope="col"><?= _('december_internships') ?></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row"><?= _('initial_application') ?></th>
                                    <td><?= _('feb') ?> </td>
                                    <td><?= _('sept') ?></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><?= _('contribution_final') ?></th>
                                    <td><?= _('apr') ?> </td>
                                    <td><?= _('nov') ?></td>
                                  </tr>
                                  <tr>
                                    <th scope="row"><?= _('internships') ?></th>
                                    <td><?= _('may_aug') ?></td>
                                    <td><?= _('dec_mar') ?></td>
                                  </tr>
                                </tbody>
                              </table>
                        </div>
                    </div>

                    <div class="col-md-6 my-2">
                        <h6><?= _('application_tips') ?></h6>
                        <ul>
                            <?= _('tips_list') ?>
                        </ul>
                    </div>
                </div>
                <p><?= _('here_is_a_link') ?>
                    <a target="_blank" href="https://raw.githubusercontent.com/outreachy/creative-works-and-scripts/master/creative-works/open-source-101-gsoc-outreachy.pdf">
                    open-source-101-gsoc-outreachy.pdf</a></p>
            </div>
            <div class="row justify-content-center mb-4">
                <div class="col-md-6 my-2">
                    <img src="assets/images/open-source.jpg" class="img-fluid">
                </div>
                <div class="col-md-6 my-2">
                    <img src="assets/images/Opensource.jpg" class="img-fluid">
                </div>
            </div>

            <div class="section-title">
                <h4 class=""><?= _('outreachy_open_projects') ?></h4>
            </div>
            <?= _('mentors_for_these') ?>

            <div class="row justify-content-center">
                <div class="mt-4 col-10">
                    <h6><?= _('project_application') ?></h6>
                    <?= _('your_final_application') ?>
                </div>
            </div>

        </div>
    </section>

    <section id="team" class="section-area">
        <div class="page-header container-fluid">
            <div class="page-title">
                <span class="text-secondary text-uppercase"><?= _('our_team') ?></span>
                <h3><?= _('team') ?></h3>
            </div>
        </div>
        <div class="container my-4">
            <div class="row">
                <div class="col-lg-4 col-md-6 my-2">
                    <div class="team-card">
                        <div class="img-wrapper">
                            <img src="assets/images/team/team-members-1.png">
                        </div>
                        <div class="my-4">
                            <p class="name">Genesis Trantow</p>
                            <small class="role">Customer Web Planner</small>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href=""><i class="far fa-envelope icon"></i></a>
                                <a href=""><i class="fas fa-phone-alt icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 my-2">
                    <div class="team-card">
                        <div class="img-wrapper">
                            <img src="assets/images/team/team-members-10.png">
                        </div>
                        <div class="my-4">
                            <p class="name">Genesis Trantow</p>
                            <small class="role">Customer Web Planner</small>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href=""><i class="far fa-envelope icon"></i></a>
                                <a href=""><i class="fas fa-phone-alt icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 my-2">
                    <div class="team-card">
                        <div class="img-wrapper">
                            <img src="assets/images/team/team-members-2.png">
                        </div>
                        <div class="my-4">
                            <p class="name">Genesis Trantow</p>
                            <small class="role">Customer Web Planner</small>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href=""><i class="far fa-envelope icon"></i></a>
                                <a href=""><i class="fas fa-phone-alt icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 my-2">
                    <div class="team-card">
                        <div class="img-wrapper">
                            <img src="assets/images/team/team-members-7.png">
                        </div>
                        <div class="my-4">
                            <p class="name">Genesis Trantow</p>
                            <small class="role">Customer Web Planner</small>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href=""><i class="far fa-envelope icon"></i></a>
                                <a href=""><i class="fas fa-phone-alt icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 my-2">
                    <div class="team-card">
                        <div class="img-wrapper">
                            <img src="assets/images/team/team-members-5.png">
                        </div>
                        <div class="my-4">
                            <p class="name">Genesis Trantow</p>
                            <small class="role">Customer Web Planner</small>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href=""><i class="far fa-envelope icon"></i></a>
                                <a href=""><i class="fas fa-phone-alt icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 my-2">
                    <div class="team-card">
                        <div class="img-wrapper">
                            <img src="assets/images/team/team-members-1.png">
                        </div>
                        <div class="my-4">
                            <p class="name">Genesis Trantow</p>
                            <small class="role">Customer Web Planner</small>
                            <div class="d-flex align-items-center justify-content-center">
                                <a href=""><i class="far fa-envelope icon"></i></a>
                                <a href=""><i class="fas fa-phone-alt icon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section-area ">
        <div class="container pt-3">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6">
                    <h2 class="text-primary-bold text-uppercase">CONTACT</h2>
                    <div class="mb-5">
                        <p class="mb-0"><?= _('would_you_like') ?></p>
                        <p class="text-primary"><?= _('simply_fill') ?></p>
                        <form role="form" id="contact-form" data-toggle="validator" action="contact.php">
                            <div class="controls">
                                <div class="form-group">
                                    <label for="name"><?= _('name_required') ?></label>
                                    <input type="text" class="form-control" id="name" name="name" required="required" data-error="Name is required.">
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group">
                                    <label for="email"><?= _('email_required') ?></label>
                                    <input type="email" class="form-control" name="email" id="email" required="required" data-error="Email is required.">
                                    <div class="help-block with-errors"></div>
                                </div>

                                <div class="form-group">
                                    <label><?= _('subject') ?></label>
                                    <input type="text" id="subject"
                                           name="subject" class="form-control">
                                </div>

                                <div class="form-group">
                                    <label><?= _('message') ?></label>
                                    <textarea id="message" name="message" class="form-control" rows="5" required="required" data-error="Message is required."></textarea>
                                    <div class="help-block with-errors"></div>
                                </div>
                                <div class="messages"></div>
                                <div id="spinner" class="pb-2 d-none"><?= _('processing') ?></div>
                                <div class="">
                                    <button type="submit" id="form-submit" class="btn btn-primary pull-right"><?= _('submit') ?>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 ">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.019499137658!2d11.461246614830964!3d3.8058630972313536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bd1860b12a267%3A0x703e7c20a22cc1de!2sMboalab!5e0!3m2!1sen!2scm!4v1634558002055!5m2!1sen!2scm"
                         height="450" style="border:0; width: 100%;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-6 text-center contact-shades shade-1 ">
                    <img src="assets/icons/map--lineal-1.svg" class="img-fluid contact-icon">
                    <h6 class="mt-5 text-white">Mefou-Assi, Yaoundé</h6>
                    <h6 class="text-white"><?= _('center_region') ?></h6>
                </div>
                <div class="col-lg-4 col-md-6 text-center contact-shades shade-2 ">
                    <img src="assets/icons/phone-lineal-1.svg" class="img-fluid contact-icon">
                    <h6 class="mt-5 text-white">+237 680 795 542</h6>
                    <h6 class="text-white">+237 697 465 154</h6>
                </div>
                <div class="col-lg-4 col-md-6 text-center contact-shades shade-3 ">
                    <img src="assets/icons/email--lineal-1.svg" class="img-fluid contact-icon">
                    <h6 class="mt-5 text-white">mboalab@gmail.com</h6>
                    <h6 class="text-white">mboalab@gmail.com</h6>
                </div>

            </div>
        </div>
    </section>
</main>

<footer class="footer ">
    <div class="footer-content bg-dark">
        <div class="main">
            <div class="container">
                <div class="row  align-items-center justify-content-between ">
                    <div class="col-sm-6 col-lg-4 mb-4">
                        <div class="d-flex align-items-center">
                            <div class="img-wrapper logo">
                                <img src="assets/icons/MboaLabLogo.png" class="h-100 ">
                            </div>
                            <h6 class="text-primary-bold mt-4">MBOALAB</h6>
                        </div>
                        <p class=" font-weight-medium text-white text-justify my-2"><?= _('footer_aim') ?></p>
                        <div class="footer-icons my-3">
                            <a href="#" class="mr-2"><img src="assets/icons/facebook.svg"></a>
                            <a href="#" class="mx-2"><img src="assets/icons/instagram.svg"></a>
                            <a href="#" class="mx-2"><img src="assets/icons/whatsapp.svg"></a>
                            <a href="#" class="mx-2"><img src="assets/icons/youtube.svg"></a>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4 mb-4">
                        <h5 class="text-primary-bold text-underline text-capitalize mb-3 "><?= _('get_in_touch') ?></h5>
                        <div class="d-flex align-items-center mb-2">
                            <div class="img-wrapper mr-3">
                                <img src="assets/icons/Group 147.svg">
                            </div>
                            <div class="">
                                <small class="text-white">Location</small>
                                <p class="mb-0 text-white font-weight-bold">Yaoundé, <?= _('center_region') ?></p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <div class="img-wrapper mr-3">
                                <img src="assets/icons/Path 5906.svg">
                            </div>
                            <div class="">
                                <small class="text-white"><?= _('phone') ?></small>
                                <p class="mb-0 text-white font-weight-bold">+(237) 697 465 154</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-center mb-2">
                            <div class="img-wrapper mr-3">
                                <img src="assets/icons/Group 148.svg">
                            </div>
                            <div class="">
                                <small class="text-white">Email</small>
                                <p class="mb-0"><a href="#" class="text-white font-weight-bold">mboalab@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <p class="mb-0 py-2 text-left text-sm-center text-primary-xlight"><?= _('copyright') ?></p>
</footer>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/libs/bootstrap/js/bootstrap.min.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/libs/owlcarousel/dist/owl.carousel.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/1000hz-bootstrap-validator/0.11.9/validator.min.js" integrity="sha256-dHf/YjH1A4tewEsKUSmNnV05DDbfGN3g7NMq86xgGh8=" crossorigin="anonymous"></script>
<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.2/js/bootstrapValidator.min.js"></script>

</body>
</html>
