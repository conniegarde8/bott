import { renderExtensionTemplateAsync } from '../../../extensions.js';
import { extension_settings } from '../../../../script.js';

jQuery(async () => {
    // 1. 加载并添加插件页面UI（小鲸鱼）
    const pluginPageHtml = await renderExtensionTemplateAsync('third-party/simple-buttons', 'plugin_page');
    $('#translation_container').append(pluginPageHtml);

    // 2. 加载并添加消息操作栏按钮（🤪表情）
    const messageButtonHtml = await renderExtensionTemplateAsync('third-party/simple-buttons', 'message_button');
    $('.extraMesButtons').append(messageButtonHtml);
    
    // 绑定点击事件
    $(document).on('click', '.simple_emoji_button', function() {
        toastr.info("你点击了🤪表情按钮！");
    });

    // 3. 加载并添加数据库区域按钮（纸飞机）
    const wandButtonHtml = await renderExtensionTemplateAsync('third-party/simple-buttons', 'wand_button');
    $('#data_bank_wand_container').append(wandButtonHtml);
    
    // 绑定点击事件
    $(document).on('click', '#simple_plane_button', function() {
        toastr.success("纸飞机已发送！", "✈️");
    });
});
