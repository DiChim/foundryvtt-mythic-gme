import MGMEPanel from "./panel-base";
import '../style/panel-mythic.css'

export default class MGMEVars1Panel extends MGMEPanel {

  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      id: "mvars1_panel_window",
      template: "./modules/mythic-gme-tools/template/panel-mythic-vars1.hbs"
    });
  }

  getData() {
    return mergeObject(super.getData(), {
      rankValue: game.settings.get('mythic-gme-tools', 'currentChaos')
    });
  }

  activateListeners(html) {
    const api = game.modules.get('mythic-gme-tools').api;

    html.find("#mgme_panel_fq").click(api.mgmeFateChart);
    html.find("#mgme_panel_sa").click(api.mgmeSceneAlteration);

    html.find("#mgme_panel_re").click(api.mgmeRandomEvent);
    html.find("#mgme_panel_fo").click(api.mgmeFocusCheck);

    html.find("#mgme_panel_cq").click(api.mgmeComplexQuestion);
    html.find("#mgme_panel_bg").click(api.mgmeBackstoryGenerator);

    html.find("#mgme_panel_ci").click(api.mgmeIncreaseChaos);
    html.find("#mgme_panel_cd").click(api.mgmeDecreaseChaos);
  }

}