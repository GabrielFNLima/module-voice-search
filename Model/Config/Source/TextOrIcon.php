<?php

namespace GFNL\VoiceSearch\Model\Config\Source;

class TextOrIcon implements \Magento\Framework\Data\OptionSourceInterface
{
  public function toOptionArray()
  {
    return [
      ['value' => 'icon', 'label' => __('Show Icon')],
      ['value' => 'text', 'label' => __('Show Text')]
    ];
  }
}
